<template>
  <div id="app" class="container">
    <div class="section">
      <h1>Hello world!</h1>
      <div class="field">
        <label class="label">日時</label>
        <div class="control">
          <input class="input" type="datetime-local" v-model="date">
        </div>
      </div>
      <div class="field">
        <label class="label">名称</label>
        <div class="control">
          <input class="input" type="text" v-model="title">
        </div>
      </div>
      <div class="field">
        <form v-on:submit.prevent>
          <div class="control">
            <button v-on:click="addEvent" class="button is-primary">add</button>
          </div>
        </form>
      </div>
      <li v-for="event in events" :key="event.title">
        {{ event.title }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      title: '',
    }
  },
  computed: {
      events() {
        return this.$store.state.events
      }
    },
  methods: {
    addEvent: function() {
      const event = {
        title: this.title
      };
      this.$store.commit('add', event);
      this.title = '';
    }
  }
}
</script>
