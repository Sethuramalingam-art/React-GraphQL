import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }], // refetch queries we can call multiple qureies inside of array
    //after delete and update because once deleted it is deleteing in db but not in updating in FE so after deleted in DB
    //we are calling get clients again. it is not efficient way

    //use inmemory cache method for efficent way. it will add into apollo cache. it will read the clients
    //and update it
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });
  return (
    <>
      <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={deleteClient}>
            <FaTrash />
          </button>
        </td>
      </tr>
      );
    </>
  );
};

export default ClientRow;
