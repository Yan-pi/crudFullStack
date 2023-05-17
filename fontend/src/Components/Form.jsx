import { useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;
const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d4;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers ,onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(()=> {
    if (onEdit){
      const user = ref.current;

      user.name.value = onEdit.name;
      user.email.value = onEdit.email;
      user.phone.value = onEdit.phone;
      user.brith_date.value = onEdit.brith_date;
    }
  }, [onEdit])

  const handleSubmit = async (e) =>{
    e.preventDefalt

    const user = ref.current;
    if(
      !user.name.value ||
      !user.email.value ||
      !user.phone.value ||
      !user.brith_date.value 
    ){
      return toast.warn("fill all fields")
    }

    if (onEdit){
      await axios
      .put("https://localhost:8800" + onEdit.id, {
        name: user.name.value,
        email: user.email.value,
        phone: user.phone.value,
        brith_date: user.brith_date.value,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
    } else {
      await axios
      .post("https://localhost:8800",{
        name: user.name.value,
        email: user.email.value,
        phone: user.phone.value,
        brith_date: user.brith_date.value,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
    }
    user.name.value = "";
    user.email.value = "";
    user.phone.value = "";
    user.brith_date.value = "";

    setOnEdit(null);
    getUsers();
  };
  ;

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Phone</Label>
        <Input name="phone" />
      </InputArea>
      <InputArea>
        <Label>Birth Date</Label>
        <Input name="brith_date" type="date" />
      </InputArea>

      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default Form;
