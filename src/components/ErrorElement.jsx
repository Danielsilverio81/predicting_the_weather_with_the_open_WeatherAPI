import PropTypes from "prop-types";

ErrorElement.propTypes = {
    message: PropTypes.string
}

export default function ErrorElement({message}) {
  return (
    <div className="error-container">
        <p>Ocorreu um Erro: {message}</p>
    </div>
  )
}
