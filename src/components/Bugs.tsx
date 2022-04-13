import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnresolvedBugs, loadBugs } from "../store/bugs";
import { Bug } from "../types/types";

export const Bugs = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {bugs.map((bug: Bug) => (
        <li key={bug.id}>
          {bug.id} - {bug.title} - {bug.description}
        </li>
      ))}
    </ul>
  );
};
