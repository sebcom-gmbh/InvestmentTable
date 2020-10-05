<template>
  <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields = "[
                    {
                        name: 'name',
                        sortField: 'name'
                    },
                    {
                        name: 'email',
                        title: 'Email Address'
                    },
                    {
                        name: 'birthdate',
                        sortField: 'birthdate',
                        titleClass: 'center aligned',
                        dataClass: 'center aligned',
                    },
                    {
                        name: 'gender',
                        sortField: 'gender',
                        titleClass: 'center aligned',
                        dataClass: 'center aligned',
                        formatter (value) {
                        return value === 'M' ? 'Male' : 'Female'
                        }
                    },
                    ]"
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  components: {
    Vuetable
  },
//  methods: {
//   onUpdate() {
//     this.$refs.vuetable.refresh();
//  }
//  }
}
</script>