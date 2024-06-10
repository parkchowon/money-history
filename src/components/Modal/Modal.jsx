import styled from "styled-components";

function Modal({ handleModal, handleModalDelete }) {
  return (
    <Wrapper>
      <div className="modal">
        <div className="text">
          <p>정말 삭제하시겠습니까?</p>
        </div>
        <div className="btn-div">
          <button className="back" onClick={handleModal}>
            돌아가기
          </button>
          <div></div>
          <button className="delete" onClick={handleModalDelete}>
            삭제하기
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);

  .modal {
    width: 350px;
    height: 200px;
    display: flex;
    border-radius: 20px;
    box-shadow: 0 0 10px gray;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      padding: 20px 0;
      font-size: 20px;
      height: fit-content;
      text-align: center;
    }
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      border-bottom: 1px solid gainsboro;
    }
    .btn-div {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-evenly;
      button {
        font-size: 18px;
        width: 100%;
        height: 70px;
        border: transparent;
        background-color: transparent;
      }
      div {
        width: 1px;
        background-color: gainsboro;
      }
      .back {
        border-radius: 0 0 0 20px;
        &:hover {
          background-color: mediumaquamarine;
          color: white;
        }
      }

      .delete {
        border-radius: 0 0 20px 0;
        color: red;
        &:hover {
          background-color: #db4c4c;
          color: white;
        }
      }
    }
  }

  .back {
  }
`;

export default Modal;
