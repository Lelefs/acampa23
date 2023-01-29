<template>
  <v-container class="payment-page">
    <v-row>
      <v-col cols="12" class="d-flex justify-center flex-column align-center">
        <h1>Novo pagamento</h1>

        <v-form :form="form" class="payment__form mt-6 d-flex flex-column" @submit.prevent="submit">
          <div>
            <v-autocomplete
              v-model="select"
              :items="items"
              :loading="loadingUser"
              :search-input.sync="search"
              :class="{ 'input-error': $v.select.$error }"
              clearable
              cache-items
              hide-details
              hide-no-data
              label="Selecione o acampante *"
            ></v-autocomplete>
            <span v-if="$v.select.$error" class="payment__error-message">Campo obrigatório</span>
          </div>

          <div>
            <v-text-field
              v-model.trim="form.document"
              :class="{ 'input-error': $v.form.document.$error }"
              label="RG *"
              hide-details
              :v="$v"
            />
            <span v-if="$v.form.document.$error" class="payment__error-message">Campo obrigatório</span>
          </div>

          <div class="payment__div-inputs d-flex justify-space-between align-start">
            <div>
              <v-text-field
                v-model="form.value"
                :class="{ 'input-error': $v.form.value.$error }"
                label="Valor"
                v-mask="'R$ ###,##'"
                hide-details
                :v="$v"
              />
              <span v-if="$v.form.value.$error" class="payment__error-message">Campo obrigatório</span>
            </div>

            <v-select v-model="form.origin" :items="originsOptions" label="Origem" hide-details dense></v-select>
          </div>

          <v-text-field v-model="form.observation" label="Observação" hide-details />

          <v-btn color="success" :disabled="$v.$invalid" class="mt-4" type="submit">Enviar</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators';

export default {
  name: 'Payment',

  data: () => ({
    items: [],
    loadingUser: false,
    search: null,
    name: '',
    select: null,
    users: ['Jefferson', 'Brunna', 'Carolina', 'Leandro', 'Daniel'],
    originsOptions: ['Cantina', 'Cheque', 'Crédito', 'Débito', 'Lava rápido', 'Mensal', 'Oferta', 'Outros', 'Pix'],
    form: {
      document: '',
      id: '',
      name: null,
      observation: '',
      origin: '',
      value: '',
    },

    v: {
      default: null,
      type: [Object, null],
    },
  }),

  validations: {
    select: { required },
    form: {
      document: {
        required,
        minLength: minLength(4),
      },
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

      console.log(JSON.parse(JSON.stringify(this.form)));
      // fdfdfd
    },

    querySelections(v) {
      this.loadingUser = true;

      setTimeout(() => {
        this.items = this.users.filter(e => (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1);
        this.loadingUser = false;
      }, 500);
    },
  },

  watch: {
    search(val) {
      if (val && val !== this.select) this.querySelections(val);
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
}

.v-text-field.v-input--dense {
  padding-top: 18px !important;
}

.payment__error-message {
  font-size: 14px;
  color: red;
}
</style>
