import mocks from "../../img/svg/indexFunctional";
import { useEffect, useRef, useState } from "react";
import "../../styles/svg/indexFunctional.css";

const jibjib: any = require("../../audio/JibJig.mp3");

const svgFunctional = {
  TurnTable: () => {

    const [listAudio, setListAudio]: any = useState({
      selectInput: 0,
      audio: [
        [[new Audio(jibjib)], ["dnkeyKong"]],
        [[new Audio(jibjib)], ["dnkeyKong"]],
        [[new Audio(jibjib)], ["dnkeyKong"]],
      ],
    });

    const [stateCordenate, setStateCordenate] = useState<any>({
      cordenateAudio: 0,
    });

 

    return [
      <svg version="1.1" id="iDturnTable1" x="0px" y="0px" viewBox="0 0 20 10">
        <style type="text/css"></style>
        <path
          className="turntable0"
          d="M12.18,9.79C8.23,8.66,4.29,7.54,0.34,6.41c0.02-0.33,0.04-0.67,0.06-1C3.93,4.47,7.46,3.53,10.99,2.6
       c0.39,0.75,0.86,1.84,1.12,3.21C12.43,7.47,12.32,8.87,12.18,9.79z"
        />
        <path
          className="turntable1"
          d="M11.96,5.74c-1.79,0.11-3.68,0.17-5.65,0.17c-2.14,0-4.17-0.06-6.1-0.17c0.38-1.11,0.75-2.22,1.13-3.32
       c3.15-0.01,6.29-0.02,9.44-0.03c0.11,0.45,0.25,0.94,0.42,1.44C11.43,4.54,11.7,5.18,11.96,5.74z"
        />
        <path
          className="turntable2"
          d="M10,5.37C8.63,5.57,7.06,5.72,5.32,5.72c-1.78,0-3.39-0.15-4.78-0.36c0.3-0.98,0.61-1.97,0.91-2.95
       c2.53-0.01,5.07-0.02,7.6-0.02C9.36,3.38,9.68,4.38,10,5.37z"
        />
        <ellipse
          className="turntable3"
          cx="4.28"
          cy="3.94"
          rx="3.3"
          ry="1.68"
        />
        <ellipse
          className="turntable4"
          cx="4.28"
          cy="3.78"
          rx="1.56"
          ry="0.76"
        />
        <ellipse
          className="turntable5"
          cx="4.28"
          cy="3.94"
          rx="3.35"
          ry="1.71"
        />
        <path
          className="turntable6"
          d="M9.29,3.6c-0.05,0.03-0.16,0.09-0.3,0.11c-0.11,0.01-0.21,0-0.26-0.02C8.6,3.22,8.47,2.76,8.35,2.29
       c0.15-0.04,0.29-0.07,0.44-0.11C8.95,2.65,9.12,3.12,9.29,3.6z"
        />
        <ellipse
          className="turntable7"
          cx="4.28"
          cy="3.78"
          rx="1.5"
          ry="0.73"
        />
        <ellipse
          className="turntable8"
          cx="4.28"
          cy="3.78"
          rx="0.96"
          ry="0.47"
        />
        <ellipse
          className="turntable9"
          cx="4.28"
          cy="3.78"
          rx="0.18"
          ry="0.09"
        />
        <path
          className="turntable6"
          d="M6.6,2.95c-0.01,0-0.09-0.02-0.14-0.09C6.42,2.78,6.44,2.7,6.45,2.69c0.27-0.1,1.03-0.39,1.3-0.49
       c0.23-0.09,0.94-0.36,1.17-0.44c0.02,0.01,0.2,0.08,0.25,0.27c0.03,0.12,0,0.21-0.01,0.25C8.66,2.43,8.14,2.57,7.6,2.71
       C7.27,2.79,6.93,2.87,6.6,2.95z"
        />
        <path
          className="turntable6"
          d="M6.42,2.95c-0.02,0-0.03-0.01-0.04-0.03c-0.01-0.02-0.01-0.04,0-0.05c0.12-0.04,0.23-0.08,0.35-0.12
       C6.74,2.78,6.76,2.8,6.77,2.83C6.65,2.87,6.54,2.91,6.42,2.95z"
        />
        <path
          className="turntable6"
          d="M9.03,3.06c-0.12,0.03-0.24,0.06-0.35,0.1C8.63,3,8.58,2.84,8.53,2.69c0.12-0.03,0.23-0.05,0.35-0.08
       C8.92,2.76,8.98,2.91,9.03,3.06z"
        />
        <path
          className="turntable6"
          d="M8.59,3.08C8.56,2.96,8.53,2.84,8.51,2.73c0.16-0.04,0.32-0.09,0.47-0.13C9,2.71,9.03,2.83,9.05,2.94
       C8.9,2.99,8.74,3.04,8.59,3.08z"
        />
        <path
          className="turntable6"
          d="M8.92,2.25c0.02,0.12,0.05,0.24,0.07,0.36C8.83,2.65,8.67,2.68,8.51,2.72C8.49,2.61,8.47,2.49,8.45,2.37
       C8.61,2.33,8.76,2.29,8.92,2.25z"
        />
        <path
          className="turntable10"
          d="M8.82,1.83C8.86,1.86,8.95,1.94,9,2.08C9.04,2.19,9.03,2.3,9.02,2.35C8.99,2.38,8.91,2.46,8.79,2.5
       c-0.17,0.06-0.32,0.02-0.37,0c0-0.06-0.01-0.16-0.05-0.27c-0.04-0.09-0.08-0.16-0.12-0.2C8.44,1.97,8.63,1.9,8.82,1.83z"
        />
        <path
          className="turntable6"
          d="M6.37,2.85c-0.02,0-0.03-0.01-0.04-0.03c-0.01-0.02-0.01-0.04,0-0.05C6.44,2.74,6.55,2.7,6.67,2.66
       C6.69,2.68,6.7,2.71,6.72,2.73C6.6,2.77,6.49,2.81,6.37,2.85z"
        />
        <path
          className="turntable11"
          d="M6.57,2.9c-0.14,0.05-0.28,0.1-0.42,0.14C6.11,2.98,6.07,2.92,6.04,2.87c0.14-0.04,0.29-0.09,0.43-0.13
       C6.5,2.79,6.53,2.84,6.57,2.9z"
        />
        <path
          className="turntable12"
          d="M6.29,3.17C6.25,3.12,6.21,3.08,6.17,3.03c0.07-0.03,0.15-0.05,0.22-0.08C6.36,3.03,6.33,3.1,6.29,3.17z"
        />
        <path
          className="turntable13"
          d="M11.96,5.7c-1.75,0.31-3.79,0.54-6.04,0.52C3.8,6.22,1.89,6,0.22,5.7C0.17,6.16,0.13,6.69,0.11,7.28
       C0.09,8.25,0.15,9.09,0.22,9.75C2.14,9.8,4.1,9.82,6.11,9.82c1.99,0,3.95-0.02,5.86-0.07c-0.09-0.59-0.16-1.3-0.16-2.08
       C11.81,6.93,11.88,6.26,11.96,5.7z"
        />
        <path
          className="turntable14"
          d="M9.98,5.61c-1.44,0.2-3.1,0.33-4.95,0.31C3.38,5.91,1.88,5.78,0.56,5.6C0.55,5.53,0.54,5.46,0.53,5.39
       c1.32,0.19,2.84,0.32,4.5,0.33C6.89,5.74,8.56,5.6,10,5.39C9.99,5.47,9.99,5.54,9.98,5.61z"
        />
        <path
          className="turntable15"
          d="M12.51,8.39c0.01,0.12,0.01,0.26,0,0.41c-0.01,0.17-0.03,0.33-0.05,0.46c0.21,0.01,0.51,0.03,0.88,0.06
       c0.91,0.06,1.36,0.09,1.59,0.11c1.64,0.13,1.67,0.25,1.96,0.12c0.25-0.11,0.55-0.52,1.14-1.34c0.99-1.37,1.03-1.41,1.07-1.56
       c0.24-0.97-0.08-2.34-0.94-2.65c-0.65-0.23-1.32,0.25-1.53,0.4c-0.78,0.56-1.24,1.63-0.96,1.98c0.15,0.2,0.46,0.07,0.7,0.35
       c0.16,0.18,0.24,0.48,0.18,0.72c-0.2,0.8-2.03,1.08-2.73,1c-0.06-0.01-0.34-0.05-0.71-0.06C12.85,8.38,12.64,8.39,12.51,8.39z"
        />
        <path
          className="turntable16"
          d="M19.19,0.78C19.31,1,19.16,1.1,19.21,1.63c0.06,0.6,0.28,0.72,0.42,1.27c0.04,0.17,0.28,1.08-0.14,1.77
       c-0.25,0.4-0.47,0.31-1.25,0.89c-0.91,0.67-0.77,0.92-1.34,1.17c-0.42,0.19-0.99,0.16-2.11,0.08c-1.05-0.07-1.22-0.19-1.32-0.3
       c-0.25-0.27-0.1-0.48-0.32-1.44c-0.17-0.76-0.32-0.86-0.24-1.19c0.08-0.34,0.27-0.35,0.72-0.92c0.56-0.72,0.41-0.92,0.8-1.22
       c0.39-0.3,0.59-0.14,1.31-0.45c0.68-0.3,0.63-0.49,1.16-0.72C17.75,0.21,18.91,0.28,19.19,0.78z"
        />
        <path
          className="turntable17"
          d="M18.98,0.97c0.11,0.2-0.03,0.3,0.02,0.79c0.05,0.56,0.26,0.67,0.39,1.18c0.04,0.16,0.26,1.01-0.13,1.65
       c-0.23,0.37-0.44,0.29-1.17,0.83c-0.84,0.63-0.72,0.86-1.25,1.1c-0.4,0.18-0.92,0.15-1.97,0.08c-0.98-0.06-1.14-0.18-1.23-0.28
       c-0.23-0.25-0.09-0.45-0.3-1.34c-0.16-0.71-0.3-0.81-0.22-1.11c0.08-0.32,0.26-0.32,0.67-0.86c0.52-0.67,0.38-0.85,0.75-1.13
       c0.37-0.28,0.55-0.13,1.22-0.42c0.64-0.28,0.58-0.46,1.08-0.67C17.63,0.44,18.72,0.5,18.98,0.97z"
        />
        <path
          className="turntable13"
          d="M11.96,9.79h0.55V5.66h-0.55c0.08,0.62,0.13,1.35,0.13,2.18C12.08,8.57,12.03,9.23,11.96,9.79z"
        />
        <path
          className="turntable13"
          d="M12.51,5.66c-0.18,0-0.37,0-0.55,0c-0.14-0.55-0.32-1.15-0.55-1.78c-0.2-0.54-0.42-1.04-0.63-1.49
       c0.2,0.01,0.4,0.02,0.6,0.04C11.76,3.51,12.13,4.58,12.51,5.66z"
        />
        <path
          className="turntable18"
          d="M19.17,6.25c-0.05,0.14-0.25,0.66-0.79,0.95c-0.55,0.29-1.24,0.24-1.79-0.13"
        />
        <path
          className="turntable18"
          d="M15.98,8.04c0.12,0.13,0.38,0.39,0.79,0.54c0.4,0.15,0.76,0.14,0.93,0.12"
        />
        <path
          className="turntable19"
          d="M14.57,8.44c-0.02,0.06-0.1,0.29,0,0.56c0.12,0.3,0.39,0.41,0.43,0.43"
        />
        <path
          className="turntable18"
          d="M13.3,8.4c-0.01,0.01-0.26,0.24-0.2,0.55c0.04,0.22,0.2,0.34,0.24,0.37"
        />
        <path
          className="turntable20"
          d="M11.81,9.7c-3.81,0-7.63,0-11.44,0C0.27,9.26,0.19,8.71,0.19,8.08c-0.01-0.7,0.08-1.31,0.18-1.79
       c3.81,0,7.63,0,11.44,0c-0.07,0.52-0.12,1.12-0.11,1.79C11.7,8.68,11.75,9.22,11.81,9.7z"
        />

        <path
          className="turntable22"
          d="M8.97,7.63H7.04V6.41C7.28,6.35,7.61,6.3,7.99,6.29c0.4,0,0.73,0.06,0.98,0.12C8.97,6.82,8.97,7.23,8.97,7.63z
       "
        />
        <path
          className="turntable22"
          d="M11.25,7.63H9.32V6.41c0.23-0.07,0.56-0.13,0.95-0.14c0.41,0,0.74,0.07,0.98,0.14
       C11.25,6.82,11.25,7.23,11.25,7.63z"
        />

        {/*   <g
          id="svgGroupNextTurntable"
          onClick={() => {
            listAudio.audio[stateCordenate.cordenateAudio][0][0].pause();
            setStateCordenate({
              ...stateCordenate,
              cordenateAudio:
                stateCordenate.cordenateAudio === 0
                  ? listAudio.audio.length
                  : stateCordenate.cordenateAudio - 1,
            });
            console.log(stateCordenate);
            listAudio.audio[stateCordenate.cordenateAudio][0][0].play();
     
          }}
        >
          <path
            className="turntable23"
            d="M8.86,7.63H7.15V6.55c0.25-0.04,0.54-0.07,0.88-0.07c0.32,0,0.6,0.03,0.84,0.07C8.86,6.91,8.86,7.27,8.86,7.63
       z"
          />
          <path
            className="turntable30"
            d="M7.4,7.06c0,0.27,0.28,0.43,0.4,0.38c0.18-0.07,0.18-0.69,0-0.77C7.68,6.63,7.4,6.79,7.4,7.06z"
          />
          <path
            className="turntable30"
            d="M8.05,7.06c0,0.27,0.28,0.43,0.4,0.38c0.18-0.07,0.18-0.69,0-0.77C8.34,6.63,8.05,6.79,8.05,7.06z"
          />
        </g> */}

        <line
          className="turntable25"
          x1="16.84"
          y1="3.79"
          x2="16.29"
          y2="1.21"
        />
        <line
          className="turntable26"
          x1="19.04"
          y1="2.01"
          x2="18.39"
          y2="4.03"
        />
        <line
          className="turntable27"
          x1="13.93"
          y1="3.16"
          x2="16.29"
          y2="4.7"
        />
        <line
          className="turntable26"
          x1="13.7"
          y1="6.11"
          x2="15.59"
          y2="6.02"
        />
        <ellipse
          className="turntable28"
          cx="1.76"
          cy="7.99"
          rx="1.58"
          ry="1.66"
        />
        <g
          id="gTurntable00"
          onClick={() => {
            listAudio.audio[stateCordenate.cordenateAudio][0][0].play();
          }}
        >
          <circle className="turntable29" cx="1.76" cy="7.99" r="1.4" />
          <path
            className="turntable30"
            d="M2.35,7.99c0,0.58-0.62,0.93-0.88,0.83c-0.39-0.16-0.39-1.5,0-1.65C1.73,7.06,2.35,7.41,2.35,7.99z"
          />
        </g>
        <ellipse
          className="turntable28"
          cx="5.17"
          cy="7.99"
          rx="1.58"
          ry="1.66"
        />
        <g
          id="gTurntable01"
          onClick={() => {
            listAudio.audio[stateCordenate.cordenateAudio][0][0].pause();
          }}
        >
          <circle className="turntable29" cx="5.17" cy="7.99" r="1.4" />
          <ellipse
            className="turntable30"
            cx="4.71"
            cy="8.03"
            rx="0.42"
            ry="0.88"
          />
          <ellipse
            className="turntable30"
            cx="5.67"
            cy="7.99"
            rx="0.42"
            ry="0.88"
          />
        </g>
        <path
          className="turntable31"
          d="M18.71,4.69c0,0.21-0.44,0.19-0.96,0.7c-0.39,0.38-0.35,0.59-0.71,0.82c-0.28,0.18-0.78,0.36-0.96,0.18
       c-0.33-0.33,0.21-2.01,1.28-2.24C17.98,4.02,18.72,4.42,18.71,4.69z"
        />
        {/* 
        <g
          id="svgGroupBackTurntable"
          onClick={() => {
            listAudio.audio[stateCordenate.cordenateAudio][0][0].pause();
            listAudio.audio[
              stateCordenate.cordenateAudio
            ][0][0].currentTime = 0;
            setStateCordenate({
              ...stateCordenate,
              cordenateAudio:
                stateCordenate.cordenateAudio === listAudio.audio.length
                  ? 0
                  : stateCordenate.cordenateAudio + 1,
            });
            console.log(stateCordenate.cordenateAudio);
            listAudio.audio[stateCordenate.cordenateAudio][0][0].play();
          }}
        >
          <path
            className="turntable23"
            d="M11.14,7.63H9.43V6.55C9.69,6.52,9.99,6.5,10.32,6.5c0.3,0,0.58,0.02,0.82,0.05
       C11.14,6.91,11.14,7.27,11.14,7.63z"
          />

          <path
            className="turntable30"
            d="M10.23,7.06c0,0.27-0.29,0.43-0.41,0.38c-0.18-0.07-0.18-0.69,0-0.77C9.94,6.63,10.23,6.79,10.23,7.06z"
          />
          <path
            className="turntable30"
            d="M10.89,7.06c0,0.27-0.29,0.43-0.41,0.38c-0.18-0.07-0.18-0.69,0-0.77C10.6,6.63,10.89,6.79,10.89,7.06z"
          />
        </g> */}
        <ellipse
          className="turntable21"
          cx="10.07"
          cy="8.82"
          rx="0.75"
          ry="0.83"
        />

        <g
          id="svgGroupUpTurnTable"
          onClick={() => {
            listAudio.audio[stateCordenate.cordenateAudio][0][0].volume == 1
              ? console.log("volumen max")
              : (listAudio.audio[stateCordenate.cordenateAudio][0][0].volume =
                  listAudio.audio[stateCordenate.cordenateAudio][0][0].volume +
                  0.1);
            /*  listAudio.audio[stateCordenate.cordenateAudio][0][0].volume = 1; */
          }}
        >
          <ellipse
            className="turntable24"
            cx="10.07"
            cy="8.82"
            rx="0.67"
            ry="0.74"
          />

          <ellipse
            className="turntable30"
            cx="10.07"
            cy="8.83"
            rx="0.14"
            ry="0.59"
          />
          <ellipse
            className="turntable30"
            cx="10.07"
            cy="8.82"
            rx="0.57"
            ry="0.15"
          />
        </g>
        <ellipse
          className="turntable21"
          cx="8.16"
          cy="8.83"
          rx="0.75"
          ry="0.83"
        />
        <g
          id="svgGroupDownTurnTable"
          onClick={() => {
            listAudio.audio[stateCordenate.cordenateAudio][0][0].volume == 0
              ? console.log("volumen min")
              : (listAudio.audio[stateCordenate.cordenateAudio][0][0].volume =
                  listAudio.audio[stateCordenate.cordenateAudio][0][0].volume -
                  0.1);

            /*  listAudio.audio[stateCordenate.cordenateAudio][0][0].volume = 1; */
          }}
        >
          <ellipse
            className="turntable24"
            cx="8.16"
            cy="8.83"
            rx="0.67"
            ry="0.74"
          />

          <ellipse
            className="turntable30"
            cx="8.16"
            cy="8.82"
            rx="0.57"
            ry="0.15"
          />
        </g>

        <path
          className="turntable32"
          id='disK00'
          d="M7.51,3.68C6.96,3.7,6.41,3.71,5.86,3.73c0,0.06,0,0.15-0.05,0.25C5.71,4.23,5.46,4.31,5.41,4.32
       c0.55,0.17,1.1,0.33,1.65,0.5c0.1-0.08,0.54-0.46,0.49-0.95C7.54,3.81,7.53,3.75,7.51,3.68z"
        />
        <path
          id='disK01'
          className="turntable32"
          d="M2.79,4C2.19,4.04,1.6,4.08,1,4.12c-0.01-0.1-0.01-0.24,0.03-0.4c0.1-0.38,0.37-0.6,0.48-0.68
       c0.47,0.13,0.93,0.25,1.4,0.38c-0.03,0.02-0.14,0.1-0.18,0.27C2.7,3.85,2.77,3.98,2.79,4z"
        />
        <path
          className="turntable33"
          d="M11.14,5.72c-0.13-0.02-0.27-0.04-0.4-0.06c-0.16-0.54-0.35-1.14-0.58-1.77c-0.2-0.54-0.41-1.04-0.61-1.5
       C9.7,2.43,9.85,2.47,9.99,2.5C10.38,3.57,10.76,4.65,11.14,5.72z"
        />
        <path
          className="turntable33"
          d="M10.63,5.73c-0.12-0.02-0.24-0.05-0.35-0.07c-0.16-0.54-0.35-1.13-0.59-1.77c-0.2-0.54-0.4-1.04-0.6-1.5
       c0.13,0.04,0.26,0.07,0.39,0.11C9.86,3.58,10.25,4.66,10.63,5.73z"
        />
        <path
          className="turntable33"
          d="M11.69,5.72c-0.13-0.02-0.27-0.04-0.4-0.06c-0.16-0.54-0.35-1.14-0.58-1.77c-0.2-0.54-0.41-1.04-0.61-1.5
       c0.15,0.03,0.29,0.06,0.44,0.09C10.92,3.57,11.3,4.65,11.69,5.72z"
        />
        <line className="turntable34" x1="3.34" y1="9.39" x2="3.5" y2="8.97" />
        <line className="turntable34" x1="3.16" y1="6.67" x2="3.78" y2="6.59" />
        <line className="turntable34" x1="7.15" y1="8.09" x2="6.95" y2="8.82" />
        <line className="turntable34" x1="9.09" y1="7.99" x2="9.16" y2="7.99" />
        <line
          className="turntable34"
          x1="11.14"
          y1="7.89"
          x2="11.25"
          y2="7.88"
        />
        <line
          className="turntable34"
          x1="11.25"
          y1="8.82"
          x2="11.2"
          y2="8.98"
        />
        <line className="turntable34" x1="8.97" y1="7.76" x2="9.55" y2="7.99" />
        <line className="turntable34" x1="0.53" y1="6.06" x2="0.71" y2="6.06" />
        <line className="turntable34" x1="3.39" y1="6.96" x2="3.47" y2="7.39" />
        <line className="turntable34" x1="2.79" y1="9.43" x2="3.16" y2="9.18" />
        <line className="turntable35" x1="2.62" y1="7.31" x2="2.72" y2="8.24" />
        <line className="turntable35" x1="0.91" y1="7.55" x2="0.84" y2="7.99" />
        <line className="turntable35" x1="1.18" y1="8.97" x2="1.69" y2="9.06" />
        <line className="turntable35" x1="6.44" y1="7.76" x2="6.33" y2="8.31" />
        <line className="turntable35" x1="4.78" y1="6.85" x2="5.17" y2="6.96" />
        <line className="turntable35" x1="5.13" y1="9.1" x2="5.13" y2="8.87" />

        <g className=""></g>
      </svg>,
    ];
  },
};

export default svgFunctional;
