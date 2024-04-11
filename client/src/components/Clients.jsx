import React from "react";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";

const Clients = () => {
  const { loading, data, error } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <div>
      {" "}
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clients;
