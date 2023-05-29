import { action } from "./action";

export default function SinglePageForm() {
  return (
    <div>
      <h1>Multi Page Form</h1>
      <form action={action}>
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
