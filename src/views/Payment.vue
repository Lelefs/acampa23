<template>
  <v-container class="payment-page my-auto">
    <v-row>
      <v-col cols="12" :md="userMovimentations.length ? 6 : 12" class="d-flex justify-center flex-column align-center">
        <h1>Novo pagamento</h1>

        <v-form :form="form" ref="form" class="payment__form mt-6 d-flex flex-column" @submit.prevent="submit">
          <div>
            <v-autocomplete
              v-model="select"
              :items="items"
              :loading="loadingUser"
              :search-input.sync="search"
              :class="{ 'input-error': $v.select.$error }"
              item-text="nome"
              item-value="id"
              clearable
              cache-items
              hide-details
              no-data-text="Nenhum usuário encontrado"
              label="Nome *"
              placeholder="Selecione o acampante"
              @input="onInput"
            ></v-autocomplete>
            <span v-if="$v.select.$error" class="payment__error-message">Campo obrigatório</span>
          </div>

          <div class="payment__div-inputs d-flex justify-space-between align-start">
            <div>
              <v-text-field
                v-model="form.value"
                :class="{ 'input-error': $v.form.value.$error }"
                label="Valor *"
                placeholder="Informe o valor a ser pago"
                v-mask="'R$ ###,##'"
                hide-details
                :v="$v"
              />
              <span v-if="$v.form.value.$error" class="payment__error-message">Campo obrigatório</span>
            </div>

            <div>
              <v-select
                v-model="form.origin"
                :items="originsOptions"
                :class="{ 'input-error': $v.form.origin.$error }"
                item-text="label"
                item-value="id"
                label="Origem *"
                placeholder="Informe a forma de pagamento"
                hide-details
                dense
              ></v-select>
              <span v-if="$v.form.origin.$error" class="payment__error-message">Campo obrigatório</span>
            </div>
          </div>

          <v-text-field v-model="form.observation" label="Observação" placeholder="Informe alguma observação se necessário" hide-details />

          <v-btn color="success" :disabled="$v.$invalid" :loading="loadingForm" class="mt-4" type="submit">Enviar</v-btn>
        </v-form>
      </v-col>

      <v-col v-if="userMovimentations.length" cols="12" md="6">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Data</th>
                <th class="text-left">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in userMovimentations" :key="index">
                <td>{{ item.date }}</td>
                <td>{{ item.value }}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{{ total }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex';

export default {
  name: 'Payment',

  data: () => ({
    form: {
      id: '',
      observation: '',
      origin: '',
      value: '',
    },
    items: [],
    loadingUser: false,
    loadingForm: false,
    loadingMovimentation: false,
    originsOptions: [
      { id: 0, label: 'Cantina' },
      { id: 1, label: 'Cheque' },
      { id: 2, label: 'Crédito' },
      { id: 3, label: 'Débito' },
      { id: 4, label: 'Dinheiro' },
      { id: 5, label: 'Lava rápido' },
      { id: 6, label: 'Oferta' },
      { id: 7, label: 'Outros' },
      { id: 8, label: 'Pix' },
    ],
    search: null,
    select: null,
    timerId: null,
    total: 'R$ 0,00',
    userMovimentations: [],
    userSelected: false,
  }),

  computed: {
    ...mapGetters('users', ['users']),
  },

  validations: {
    select: { required },
    form: {
      origin: { required },
      value: {
        required,
        minLength: minLength(4),
      },
    },
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$snackbar({ message: 'Preencha os campos obrigatórios', color: 'error' });
        return;
      }

      this.loadingForm = true;
      const currentValue = parseFloat(this.form.value.split('R$ ')[1].replace(',', '.'));

      this.$axios
        .post('/movimentacao', {
          idPessoa: this.form.id,
          observacao: this.form.observation,
          origem: this.form.origin,
          valor: currentValue,
        })
        .then(
          res => {
            this.resetValues();
            this.loadingForm = false;
            this.userMovimentations = [];
            this.$snackbar({ message: 'Pagamento feito com sucesso', color: 'success' });
          },
          error => {
            this.loadingForm = false;
            this.$snackbar({ message: 'Erro ao realizar o pagamento', color: 'error' });
          },
        );
    },

    querySelections(v) {
      this.loadingUser = true;
      this.items = [];
      clearTimeout(this.timerId);

      this.timerId = setTimeout(() => {
        if (this.search === '') {
          this.loadingUser = false;
          return;
        }

        this.$axios.get('/pessoa', { params: { Nome: this.search } }).then(
          res => {
            this.loadingUser = false;
            this.items = res.data;
          },
          error => {
            this.loadingUser = false;
            this.$snackbar({ message: 'Não foi possível encontrar um usuário', color: 'error' });
          },
        );
      }, 400);
    },

    onInput(value) {
      this.userSelected = true;
      const user = this.items.filter(u => u.id === value)[0];
      this.userMovimentations = [];

      if (user) {
        this.form.observation = '';
        this.form.origin = '';
        this.form.value = '';
        this.loadingMovimentation = true;
        this.total = 0;

        this.$axios.get('/movimentacao').then(
          res => {
            this.loadingMovimentation = false;
            this.userMovimentations = res.data.map(m => {
              this.total += m.valor;
              return {
                date: m.datamovimentacao.split('T')[0].split('-').reverse().join('/'),
                value: m.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
              };
            });
            this.total = this.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
          },
          error => {
            this.loadingMovimentation = false;
            this.$snackbar({ message: 'Nenhuma movimentação encontrada', color: 'error' });
          },
        );

        this.form.id = user.id;
      }
    },

    resetValues() {
      this.$refs.form.reset();
      this.items = [];
      this.search = null;
      this.select = null;
      this.timerId = null;
    },
  },

  watch: {
    search(val) {
      if (this.userSelected) {
        this.userSelected = false;
        return;
      }
      if (val && val !== this.select && val !== '') this.querySelections(val);
    },
  },
};
</script>

<style lang="scss">
.payment__form {
  width: 80%;
  gap: 16px;
}

.input-error.theme--light.v-text-field {
  .v-input__control .v-input__slot:before {
    border-color: red !important;
  }
}

.payment__div-inputs {
  gap: 16px;

  > div {
    width: 50%;
  }

  @media only screen and (max-width: 720px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
}

.v-text-field.v-input--dense {
  padding-top: 18px !important;
}

.payment__error-message {
  font-size: 14px;
  color: red;
}
</style>
