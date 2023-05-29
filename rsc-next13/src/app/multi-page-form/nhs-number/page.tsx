import { action } from "./action";

export default function SinglePageForm() {
  return (
    <div>
      <h1>Multi Page Form</h1>
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

        <button
          className='nhsuk-button'
          data-module='nhsuk-button'
          type='submit'
        >
          Next
        </button>
      </form>
    </div>
  );
}
