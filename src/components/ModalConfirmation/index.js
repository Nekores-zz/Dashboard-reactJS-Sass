import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_ModalConfirmation.scss';
import Modal from 'react-modal';

const customStyles = {
    content: {
      zIndex: 105,
      padding: '0px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '5px',
      border: 'none',
    },
    overlay:{
      zIndex: 100,
    }
  };
  
Modal.setAppElement('#root');

class ModalConfirmation extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      mode:1,//1 : with cancel and confirm button, 2 : with close button only
      text: this.props.Text,
      title: this.props.Title,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  openModal(mode,title, text) {
    this.setState({
      modalIsOpen: true,
      mode:mode,//1 : with cancel and confirm button, 2 : with close button only
      title: title,
      text: text,
    });
  }

  static getDerivedStateFromProps(props) {
    console.log(props)
    return {
      title: props.Title,
      text: props.Text
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  confirm(){
    this.setState({modalIsOpen: false})
    // this.props.confirmFunc()
  }

  render(){
    const {
      className,
    } = this.props

    const classes = classnames('confirmation-modal', 
    className)

    const renderButton = ()=>{
      if(this.state.mode === 1){
        return <div className="confirmation-modal__footer">
          <div className="confirmation-modal__footer__twoButton">
            <span className="confirmation-modal__footer__twoButton__close" onClick={this.props.closeModal}>Cancel</span>
          </div>
          <div className="confirmation-modal__footer__twoButton">
            <span className="confirmation-modal__footer__twoButton__yes" onClick={this.confirm}>Confirm</span>
          </div>
        </div>
      }
      else{
        return <div className="confirmation-modal__footer">
          <div className="confirmation-modal__footer__oneButton">
            <span className="confirmation-modal__footer__oneButton__close" onClick={this.props.closeModal}>Close</span>
          </div>
        </div>
      }
    }

    return(
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose = {
            this.closeModal
          }
          style={customStyles}
        >
        <div className={classes}>
          <div className="confirmation-modal__header">
            <div className="confirmation-modal__header__text">
              <span ref={subtitle => this.subtitle = subtitle}>{this.state.title}</span>
            </div>
            <div className="confirmation-modal__header__icon">
              <i className="material-icons" onClick={this.props.closeModal}>clear</i>
            </div>
          </div>
          <div className="confirmation-modal__body">
            <p>{this.state.text}</p>
          </div>
          {renderButton()}
      </div>
        </Modal>
    )
  }
}

ModalConfirmation.propTypes = {
  className: PropTypes.string,
  confirmFunc: PropTypes.func,
}

ModalConfirmation.defaultProps = {
  className: '',
}

export default ModalConfirmation