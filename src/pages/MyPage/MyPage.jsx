import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import api from "../../api/api";

function MyPage() {
  const token = JSON.parse(localStorage.getItem("user-token")).state
    .accessToken;
  const { data: user } = useQuery({
    queryKey: ["user", token],
    queryFn: async () => await api.auth.checkUser(token),
  });

  const [isEdited, setIsEdited] = useState(false);
  const [editedNick, setEditedNick] = useState(user.nickname);
  const [editedImg, setEditedImg] = useState("");
  const fileReader = new FileReader();
  const [avatar, setAvatar] = useState(user.avatar);

  const queryClient = useQueryClient();

  const { mutateAsync: updateUser } = useMutation({
    mutationFn: (data) => api.auth.updateUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  const handleClickEdit = () => {
    setIsEdited(!isEdited);
  };

  const handleClickRegist = () => {
    const updateProfile = {
      avatar: avatar,
      nickname: editedNick,
    };
    updateUser({ updateProfile, token });
    setIsEdited(!isEdited);
  };

  const handleImgInput = (e) => {
    const img = e.target.files[0];
    setAvatar(img);
    fileReader.readAsDataURL(img);
    fileReader.onload = () => {
      setEditedImg(fileReader.result);
    };
  };

  return (
    <Wrapper>
      {isEdited ? (
        <>
          <ImgDiv>
            <ProfileImg src={editedImg ? editedImg : user.avatar} />
            <InputLabel>
              <img src="src\images\edit.png" />
              <ImgInput
                type="file"
                accept="image/*"
                onChange={handleImgInput}
              />
            </InputLabel>
          </ImgDiv>
          <NickNameText>닉네임</NickNameText>
          <NickInput
            defaultValue={user.nickname}
            onChange={(e) => setEditedNick(e.target.value)}
          />
          <Button onClick={handleClickRegist}>등록</Button>
        </>
      ) : (
        <>
          <ImgDiv>
            <ProfileImg src={user.avatar} />
          </ImgDiv>
          <NickNameText>닉네임</NickNameText>
          <p>{user.nickname}</p>
          <Button onClick={handleClickEdit}>수정</Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 30%;
  margin: 4% auto;
  border-radius: 20px;
  box-shadow: 0 0 10px gainsboro;
  height: 50dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const InputLabel = styled.label`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  img {
    width: 90px;
  }
`;

const ImgInput = styled.input`
  display: none;
`;

const NickNameText = styled.p`
  font-size: 20px;
  margin: 20px 0;
  font-weight: 600;
`;

const NickInput = styled.input`
  border: 1px solid;
  border-radius: 40px;
  height: 35px;
  padding: 0 10px;
  width: 150px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: inherit;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 30px 0;
  background-color: transparent;
  border: 1px solid;
  border-radius: 40px;
  &:hover {
    border: 1px solid mediumaquamarine;
    color: white;
    background-color: mediumaquamarine;
  }
`;
const ImgDiv = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: mediumaquamarine;
`;
export default MyPage;
