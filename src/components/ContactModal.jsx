import './ContactModal.css'

export function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <>
      <div className="contact-modal-overlay" onClick={onClose} />
      <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <div className="contact-modal__card" onClick={(e) => e.stopPropagation()}>
          <button
            className="contact-modal__close"
            aria-label="Zavřít"
            onClick={onClose}
          >
            ×
          </button>
          <h2 id="contact-title" className="contact-modal__title">Kontakt</h2>
          <p className="contact-modal__item">
            <strong>Email:</strong>{' '}
            <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p className="contact-modal__item">
            <strong>Telefon:</strong>{' '}
            <a href="tel:+420123456789">+420 123 456 789</a>
          </p>
        </div>
      </div>
    </>
  )
}
