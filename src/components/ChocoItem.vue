<template>
  <h3>
    <span>{{ msg }}</span>
    <button @click="deleteChocolate(position)">x</button>
  </h3>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    position: { type: Number, required: true }
  },
  methods: {
    async deleteChocolate() {
      // const result = await this.$store.dispatch('suma')
      // console.log({ result })

      const { error, data } = await this.$store.dispatch('removeChocolate', this.position)
      if (error) {
        alert(error);
        return;
      }

      console.log({ data })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
