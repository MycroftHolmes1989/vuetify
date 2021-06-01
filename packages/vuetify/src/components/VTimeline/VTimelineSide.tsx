import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VTimelineSide',

  props: {
    side: String,
  },

  setup (props, ctx) {
    return () => (
      <div
        class={[
          `v-timeline-item__${props.side}`,
        ]}
      >
        { ctx.slots.default?.() }
      </div>
    )
  },
})
