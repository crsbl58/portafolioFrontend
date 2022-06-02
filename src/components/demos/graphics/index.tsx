import React, { useEffect, useState } from "react";
import "../../../styles/demos/graphics/index.css";
import "../../../styles/demos/graphics/responsiveIndex.css";

const Graphics = () => {
  const [stateListGraphics, setStateListGraphics] = useState([
    { name: "chile", amount: 20 },
    { name: "españa", amount: 23 },
    { name: "japon", amount: 14 },
  ]);

  const [stateInputs, SetstateInputs] = useState<any>({
    Data: {
      name: null,
      amount: null,
      maximumQuantity: 100,
    },
  });
  console.log("asd" + stateListGraphics);
  useEffect(() => {
    console.log(stateListGraphics);
  }, [stateListGraphics]);

  const calculateIncome = (income: any) => {
    let heightResultIncome =
      (stateInputs.Data.maximumQuantity + income) /
        (stateInputs.Data.maximumQuantity / 100) -
      100;

    let heightResult = 12 / 100;

    console.log(
      "asd",
      (stateInputs.Data.maximumQuantity + income) /
        (stateInputs.Data.maximumQuantity / 100) -
        100
    );

    return heightResult * heightResultIncome;
  };

  return (
    <div className="divContainerGraphics00 flexColumn">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          stateListGraphics.length < 26
            ? setStateListGraphics([
                ...stateListGraphics,
                {
                  name: stateInputs.Data.name,
                  amount: parseInt(stateInputs.Data.amount),
                },
              ])
            : console.log("asd" + stateListGraphics);
        }}
      >
        <div className="divContainerOptionGraphics00 flexRow">
          <div className="divContainerOptionGraphics01 flexRow">
            <h4>Total</h4>
            <input
            type={"number"}
              value={stateInputs.Data.maximumQuantity}
              onChange={(e) => {
                let maximumAmount = stateListGraphics
                  .sort((a, b) => {
                    if (b.amount > a.amount) {
                      return 1;
                    }
                    if (b.amount < a.amount) {
                      return -1;
                    }
                    return 0;
                  })
                  .slice(0, 1)[0].amount;
                parseInt(e.currentTarget.value) < maximumAmount
                  ? SetstateInputs({
                      Data: {
                        ...stateInputs.Data,
                        maximumQuantity: maximumAmount,
                      },
                    })
                  : e.currentTarget.value.length == 0
                  ? SetstateInputs({
                      Data: {
                        ...stateInputs.Data,
                        maximumQuantity: maximumAmount,
                      },
                    })
                  : /*         if(e.currentTarget.value.length == 0 )
              {   SetstateInputs({
                Data: {
                  ...stateInputs.Data,
                  maximumQuantity: 0,
                },
              });} */

                    SetstateInputs({
                      Data: {
                        ...stateInputs.Data,
                        maximumQuantity: parseInt(e.currentTarget.value),
                      },
                    });
              }}
              required
              placeholder="Total"
            ></input>
          </div>
          <input
            value={stateInputs.Data.name}
            onChange={(e) => {
              SetstateInputs({
                Data: {
                  ...stateInputs.Data,
                  name: e.currentTarget.value,
                },
              });
            }}
            required
            placeholder="Nombre"
          ></input>
          <input
            value={stateInputs.Data.amount}
            onChange={(e) => {
              parseInt(e.currentTarget.value) > stateInputs.Data.maximumQuantity
                ? SetstateInputs({
                    Data: {
                      ...stateInputs.Data,
                      maximumQuantity: stateInputs.Data.maximumQuantity,
                    },
                  })
                : SetstateInputs({
                    Data: {
                      ...stateInputs.Data,
                      amount: e.currentTarget.value,
                    },
                  });
            }}
            required
            type={"number"}
            placeholder="Cantidad"
          ></input>
          <button
            onClick={() => {
              console.log("asd" + stateListGraphics);
            }}
          >
            Agregar
          </button>
        </div>
      </form>

      <div className="divContainerGraphics01 flexRow">
        <div className="divGraphicQuantityTable flexColumn">
          <div className="divContainerTitleGraphicQuantityTable flexRow">
            <h4>Nombre</h4>
            <h4>Cant.</h4>
            <h4>%</h4>
          </div>
          {stateListGraphics.map((list: any, index) => {
            let resultPercentage =
              (stateInputs.Data.maximumQuantity + list.amount) /
                (stateInputs.Data.maximumQuantity / 100) -
              100;

            return (
              <div
                className="divContainerListDataGraphics flexRow"
                onClick={() => {
                  let indexResult = index;
                  setStateListGraphics(
                    stateListGraphics.filter(
                      (list, index) => index !== indexResult
                    )
                  );
                }}
              >
                <h4>{list.name}</h4>
                <h4>{list.amount}</h4>
                <h4>{resultPercentage}</h4>
              </div>
            );
          })}
        </div>
        <div className="divGraphic00 flexRowWrap">
          {stateListGraphics.map((list: any) => (
            <div className="divGraphic01 flexRow">
              <div className="divGraphic02 flexColumn">
                <div
                  className="divGraphicTower"
                  style={{ height: `${calculateIncome(list.amount)}rem` }}
                ></div>
                <h4>{list.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Graphics;
