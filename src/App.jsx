import "bulma/css/bulma.css";
import React, { useState } from "react";
import "./App.scss";
import classNames from "classnames";

export const goods = [
  "Dumplings",
  "Carrot",
  "Eggs",
  "Ice cream",
  "Apple",
  "Bread",
  "Fish",
  "Honey",
  "Jam",
  "Garlic",
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  const deleteGood = () => {
    setSelectedGood("");
  };

  const addGood = (good) => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : "No goods selected"}
        <h1 className="title is-flex is-align-items-center">
          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={deleteGood}
            />
          )}
        </h1>
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                id="selected"
                key={good}
                data-cy="Good"
                className={classNames({
                  "has-background-success-light": isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isSelected ? "RemoveButton" : "AddButton"}
                    type="button"
                    className={isSelected ? "button is-info" : "button"}
                    onClick={isSelected ? deleteGood : () => addGood(good)}
                  >
                    {isSelected ? "-" : "+"}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
