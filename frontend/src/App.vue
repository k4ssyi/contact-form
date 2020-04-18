<template>
  <v-app>
    <Header />
    <h2 class="subtitle-1 text-center">
      ご質問やお問い合わせ、お仕事のご依頼などは下記フォームまたはTwitterのDMにてご連絡下さい。
    </h2>
    <h3 class="subtitle-1 text-center mb-10">
      ※ このページは「かっしー(@k4ssyi)」へのお問い合わせページです。
    </h3>
    <v-content>
      <ContactForms />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import ContactForms from "@/components/ContactForms.vue";

export default {
  components: {
    Header,
    ContactForms,
  },
};
</script>
