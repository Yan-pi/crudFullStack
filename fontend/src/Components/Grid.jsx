import styled from "styled-components";
// import axios form 'axios';
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 600px) {
    ${(props) => props.onlyWeb && `display: none;`}
  }
`;

export const Td = styled.td`
  padding: 15px;
  text-aling: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => {props.width ? props.width : "auto"}};
  
  
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none;"}
  }
`;

const Grid = ({ users }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <th>Name</th>
          <th>Email</th>
          <th onlyWeb>phone</th>
          <th></th>
          <th></th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.name}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>{item.phone}</Td>
            <Td alingCenteter width="5%">
                <FaEdit  />
            </Td>
            <Td alingCenteter width="5%">
                <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
