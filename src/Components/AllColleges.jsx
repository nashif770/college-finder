import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from '@tanstack/react-query'

const AllColleges = () => {
  const { user } = useContext(AuthContext);
  const { data: colleges = [], refetch } = useQuery({
    queryKey: ["myselectedclasses", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `colleges.json`
      );
      return response.json();
    },
  });
  return [colleges, refetch];
};

export default AllColleges;
