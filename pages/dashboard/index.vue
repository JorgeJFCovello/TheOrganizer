<template>
  <div>
    <v-card>
      <v-row>
        <v-data-table :headers="headers" :item-key="values" />
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default ({
  data () {
    return {
      headers: [
        {
          text: 'Column1',
          value: 'value1'
        },
        {
          text: 'Column2',
          value: 'value2'
        },
        {
          text: 'Column3',
          value: 'value3'

        }
      ],
      values: [
        {
          value1: 'algo11',
          value2: 'algo12',
          value3: 'algo13'
        },
        {
          value1: 'algo21',
          value2: 'algo22',
          value3: 'algo23'
        }
      ]
    }
  }
})
</script>
