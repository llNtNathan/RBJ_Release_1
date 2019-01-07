<template>
  <div id="app">
    <v-app toolbar dark>
      <v-layout
    wrap
  >
        <v-btn
          color="orange lighten-1"
          dark
          @click.stop="drawer = !drawer"
          round
          left
          style="display: inline;"
        >
          <v-icon>chevron_right</v-icon>
        </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      dark 
      class="orange lighten-2"
      app
    >
      <v-toolbar class="orange">

      
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <span>{{ item.title }}</span>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
  <v-content>
      <v-container justify-center fluid>
        <transition name="page" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    </v-app>
  </div>
</template>

<script>

export default {

   components: {
     
  },

  metaInfo () {
    const { appName } = window.config

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },
  data: () => ({
    drawer: null,
    persistent: true,
    isMobile: false,
     mini: false,
    right: null,
    items: [
          {title: 'Home', icon: '', to: '/'},
          {title: 'About', icon: '', to: '/teste'},
          {title: 'Pagina', icon: '', to: ''}
      ]
  }),

  mounted () {
    let vm = this
    setInterval(() => {
      vm.isMobile = vm.$refs.drawer.isMobile
    }, 1000)
  },

   methods: {
    
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }

      this.layout = layouts[layout]
    }
  }
}

</script>
