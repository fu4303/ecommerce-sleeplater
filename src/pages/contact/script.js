export default {
  // getters/setters so that each item can be reflected persistently in vuex
  computed: {
    name: {
      get() { return this.$store.state.contactForm.name; },
      set(value) { this.$store.commit({ type: 'updateContactForm', item: 'name', value }); },
    },
    email: {
      get() { return this.$store.state.contactForm.email; },
      set(value) { this.$store.commit({ type: 'updateContactForm', item: 'email', value }); },
    },
    phone: {
      get() { return this.$store.state.contactForm.phone; },
      set(value) { this.$store.commit({ type: 'updateContactForm', item: 'phone', value }); },
    },
    message: {
      get() { return this.$store.state.contactForm.message; },
      set(value) { this.$store.commit({ type: 'updateContactForm', item: 'message', value }); },
    },
  },

  methods: {
    submit() {
      const url = ['localhost', '0.0.0.0'].includes(window.location.hostname)
        ? 'http://0.0.0.0:3000/'
        : 'https://contact-form.now.sh/';
      const { name, email, phone, message } = this; // eslint-disable-line object-curly-newline

      // Send request to backend

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }), // eslint-disable-line object-curly-newline, max-len
      }).then(this.$emit('success'));
    },
  },
};
