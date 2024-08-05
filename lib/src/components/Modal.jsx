import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import closeIcon from "./closeIcon.svg";

/**
 * Modal React component.
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - checks if the modal is open
 * @param {Function} props.closeModal - Function for closing the modal
 * @param {ReactNode} props.children - the elements to display in modal
 * @param {string} [props.customStyles] - custom styles for modal
 * @returns {JSX.Element} - The modal component.
 */
const Modal = ({
    isOpen,
    closeModal,
    title,
    titleClose,
    children,
    customModal,
    customContainerInformations,
    customTitle,
    customBtnClose,
    customIconClose,
    showCloseIcon,
}) => {
    
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    const handleIconKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            closeModal();
        }

    }

    if (isOpen) {
        window.addEventListener('keydown', handleKeyDown);

        setTimeout(() => {
            const dialogElement = document.querySelector('[role="dialog"]');
            if (dialogElement) {
                const focusableElements = dialogElement.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstFocusableElement = focusableElements[focusableElements.length - 1];
                const lastFocusableElement = focusableElements[0];
                firstFocusableElement.focus();

                // Handle the pressing of the tab key event to retain focus inside the modal.
                const handleKeyDownTab = (event) => {
                    if (event.key === 'Tab') {
                        if (event.shiftKey) {
                            if (document.activeElement === firstFocusableElement) {
                                event.preventDefault();
                                lastFocusableElement.focus();
                            }
                        } else {
                            if (document.activeElement === lastFocusableElement) {
                                event.preventDefault();
                                firstFocusableElement.focus();
                            }
                        }
                    }
                };
                dialogElement.addEventListener('keydown', handleKeyDownTab);
            }
        }, 100);

        return (
            <dialog
                open={isOpen}
                className={`${styles.modal} ${customModal}`}
                onClick={(e) => e.stopPropagation({ closeModal })}
                aria-modal="true"
                tabIndex="-1"
                role="dialog"
            >
                <div className={`${styles.containerInformations} ${customContainerInformations}`}>
                    <h2 className={`${styles.title} ${customTitle}`}>{title}</h2>

                    {children}

                    <button
                        id="btnClose"
                        className={`${styles.btnClose} ${customBtnClose}`}
                        onClick={closeModal}
                        aria-label="Close Modal"
                        tabIndex="2"
                    >
                        {titleClose}
                    </button>
                    {showCloseIcon && (
                        <img
                            id="closeIcon"
                            className={`${styles.picture} ${customIconClose}`}
                            src={closeIcon}
                            alt="Close"
                            onClick={closeModal}
                            onKeyDown={handleIconKeyDown}
                            aria-label="Close Modal"
                            tabIndex="1"
                        />
                    )}
                </div>

            </dialog>
        );

    }
    else {
        // Remove event listener for keydown when the modal closes
        window.removeEventListener('keydown', handleKeyDown);
        return null;
    }
};

// Define propTypes for Modal component
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    titleClose: PropTypes.string.isRequired,
    children: PropTypes.node,
    customModal: PropTypes.string,
    customContainerInformations: PropTypes.string,
    customTitle: PropTypes.string,
    customBtnClose: PropTypes.string,
    customIconClose: PropTypes.string,
    showCloseIcon: PropTypes.bool,
};

// Define defaultProps for Modal component
Modal.defaultProps = {
    showCloseIcon: true,
};

export default Modal;