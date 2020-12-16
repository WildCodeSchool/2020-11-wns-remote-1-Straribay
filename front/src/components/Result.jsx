import React from "react";

const Result = ({ userSuggestions, value, valueInsensibleCase }) => (
  <div>
    {value !== "" && (
      <datalist id="users">
        {userSuggestions
          .filter((userSuggestion) => userSuggestion.match(valueInsensibleCase))
          .map((userSuggestion, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option value={userSuggestion} key={index}>
              {userSuggestion}
            </option>
          ))}
      </datalist>
    )}
  </div>
);

export default Result;
