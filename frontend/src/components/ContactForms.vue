<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-card class="mx-auto" outlined>
        <v-card-text>
          <v-text-field
            v-model="contactForms.name"
            :rules="nameRules"
            label="名前"
            outlined
            required
          ></v-text-field>
          <v-text-field
            v-model="contactForms.email"
            :rules="emailRules"
            label="Eメール"
            outlined
            required
          ></v-text-field>
          <v-textarea
            v-model="contactForms.content"
            :rules="contentRules"
            label="お問い合わせ内容"
            outlined
            required
          ></v-textarea>
          <div v-if="status === 1" class="text-center">
            <v-chip dark color="green">送信成功！</v-chip>
          </div>
          <div v-if="status === 2" class="text-center">
            <v-chip dark color="red">送信が失敗しました…</v-chip>
          </div>
          <v-card-actions class="mb-5 justify-center">
            <v-btn
              :disabled="!valid"
              :loading="loading"
              @click="submit"
              color="primary"
              large
              >メールを送信</v-btn
            >
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      valid: true,
      status: 0,
      loading: false,
      contactForms: {
        name: "",
        email: "",
        content: "",
      },
      nameRules: [(v) => !!v || "名前の入力は必須です。"],
      emailRules: [
        (v) => !!v || "Eメールの入力は必須です。",
        (v) => /.+@.+\..+/.test(v) || "有効なEメールを入力してください。",
      ],
      contentRules: [(v) => !!v || "内容の入力は必須です。"],
    };
  },
  methods: {
    submit() {
      this.loading = true;
      api({
        method: "post",
        url: "/mail/",
        data: this.contactForms,
      })
        .then(() => {
          this.status = 1;
          this.loading = false;
          setTimeout(() => (this.status = 0), 3000);
        })
        .catch((err) => {
          this.status = 2;
          this.loading = false;
          console.log(err.response);
          setTimeout(() => (this.status = 0), 3000);
        });
    },
  },
};
</script>

<style lang="sass" scoped></style>
