<template>
  <vuetable
    ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="fields"
    :key="componentKey" 
    :css="css"
  ></vuetable>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";

export default {
  components: {
    Vuetable,
  },
  css: [
    {
      ascendingIcon: 'glyphicon glyphicon-chevron-up',
      descendingIcon: 'glyphicon glyphicon-chevron-down'
    }
  ],
  data() {
    return {

      name: "vuetable",

      componentKey: 0,

      fields: [
        {
          name: "name",
          sortField: "name",
        },
        {
          name: "email",
          title: "Email Address",
        },
        {
          name: "birthdate",
          sortField: "birthdate",
          titleClass: "center aligned",
          dataClass: "center aligned",
        },
        {
          name: "gender",
          sortField: "gender",
          titleClass: "center aligned",
          dataClass: "center aligned",
          formatter(value) {
            return value === "M" ? "Male" : "Female";
          },
        },
      ],
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  }
};
</script>