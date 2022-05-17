import { useState } from 'react'
export default function Form() {
  const [inputVal, updateVal] = useState('')
  const [isError, initError] = useState(null)
  const [isValid, initValid] = useState(null)
  function initChange(event) {
    const { value } = event.target
    updateVal(value)
    const isLowercase = value === value.toLowerCase()
    if (isLowercase) {
      initValid(value.length ? `${value} is valid lowercase` : null)
      initError(null)
    } else {
      initError('Product name should be lowercase')
      initValid(null)
    }
  }
  function initSubmit(event) {
    event.preventDefault()
    window.alert(`${inputVal} is valid lowercase value`)
  }
  return (
    <div>
      <h2 className="mb-4">React Lowercase Text Input Validation</h2>
      <form onSubmit={initSubmit}>
        <div>
          <label className="mb-2">
            <strong>Product: </strong>
          </label>
          <input
            id="userInput"
            type="text"
            value={inputVal}
            className="form-control"
            onChange={initChange}
          />
        </div>
        <div className="d-grid mt-3">
          <button
            className="btn btn-danger"
            disabled={Boolean(isError) || inputVal.length < 1}
            type="submit"
          >
            Add
          </button>
        </div>
        {isError && (
          <div className="alert alert-danger mt-3" role="alert">
            {isError}
          </div>
        )}
        {isValid && (
          <div className="alert alert-success mt-3" role="alert">
            {isValid}
          </div>
        )}
      </form>
    </div>
  )
}