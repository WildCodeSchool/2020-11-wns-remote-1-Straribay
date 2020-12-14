import React from "react";

const Result = ({ userSuggestions, value, valueInsensibleCase }) => {
  return (
    <div>
      {value !== "" && (
        <datalist id="users">
          {userSuggestions
            .filter((userSuggestion) => {
              return userSuggestion.match(valueInsensibleCase);
            })
            .map((userSuggestion, index) => {
              return (
                <option value={userSuggestion} key={index}>
                  {userSuggestion}
                </option>
              );
            })}
        </datalist>
      )}
    </div>
  );
};

export default Result;
