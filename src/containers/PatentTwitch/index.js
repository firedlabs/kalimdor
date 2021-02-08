import PropTypes from 'prop-types'
import { Field } from '@firedlabs/design-system'

function PatentTwitch({ watch, register }) {
  return (
    <Field.Fieldset legend="Patente Twitch">
      <Field.Checkbox
        name="patentsTwitch[viewer]"
        register={register}
        active={watch('patentsTwitch[viewer]')}
        value={true}
      >
        Viewer
      </Field.Checkbox>
      <Field.Checkbox
        name="patentsTwitch[follow]"
        register={register}
        active={watch('patentsTwitch[follow]')}
        value={true}
      >
        Follow
      </Field.Checkbox>
      <Field.Checkbox
        name="patentsTwitch[vip]"
        register={register}
        active={watch('patentsTwitch[vip]')}
        value={true}
      >
        Vip
      </Field.Checkbox>
      <Field.Checkbox
        name="patentsTwitch[sub]"
        register={register}
        active={watch('patentsTwitch[sub]')}
        value={true}
      >
        Sub
      </Field.Checkbox>
      <Field.Checkbox
        name="patentsTwitch[mod]"
        register={register}
        active={watch('patentsTwitch[mod]')}
        value={true}
      >
        Mod
      </Field.Checkbox>
    </Field.Fieldset>
  )
}

PatentTwitch.propTypes = {
  watch: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

export default PatentTwitch
