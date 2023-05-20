import { action } from "./action";

export default function SinglePageForm() {
  return (
    <div>
      <h1>Multi Step Form</h1>
      <form action={action}>
        <div className='nhsuk-form-group'>
          <label className='nhsuk-label' htmlFor='nhs-number'>
            What is your NHS number?
          </label>
          <div className='nhsuk-hint' id='example-with-hint-text-hint'>
            Your NHS number is a 10 digit number that you find on any letter the
            NHS has sent you. For example, 485 777 3456.
          </div>
          <input
            className='nhsuk-input nhsuk-input--width-10'
            id='nhs-number'
            name='nhs-number'
            type='text'
            aria-describedby='example-with-hint-text-hint'
            inputMode='numeric'
          />
        </div>
        <div className='nhsuk-form-group'>
          <fieldset className='nhsuk-fieldset'>
            <legend className='nhsuk-fieldset__legend nhsuk-fieldset__legend--l'>
              <h1 className='nhsuk-fieldset__heading'>Are you 18 or over?</h1>
            </legend>

            <div className='nhsuk-radios nhsuk-radios--inline'>
              <div className='nhsuk-radios__item'>
                <input
                  className='nhsuk-radios__input'
                  id='over-18-yes'
                  name='over-18'
                  type='radio'
                  value='yes'
                />
                <label
                  className='nhsuk-label nhsuk-radios__label'
                  htmlFor='over-18-yes'
                >
                  Yes
                </label>
              </div>

              <div className='nhsuk-radios__item'>
                <input
                  className='nhsuk-radios__input'
                  id='over-18-no'
                  name='over-18'
                  type='radio'
                  value='no'
                />
                <label
                  className='nhsuk-label nhsuk-radios__label'
                  htmlFor='over-18-no'
                >
                  No
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <button
          className='nhsuk-button'
          data-module='nhsuk-button'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
