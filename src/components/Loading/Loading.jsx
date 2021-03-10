/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes } from "@emotion/react";

const Loading = () => {
    const cssBreakpoint = [320, 425, 768, 1024, 1440];
    const mqx = cssBreakpoint.map((bp) => `@media (max-width: ${bp}px)`); //mediaquery max

    let imageCss = {
        width: "10vw",
        [mqx[2]]: {
            width: "25vw",
        },
    };

    let loadingCss = {
        backgroundColor: "#E4EBE0",
        position: "fixed",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    };

    const bounce = keyframes`
        from, 0, to {
            transform: translate(0, 0) rotate(0);
        }

        20% {
            transform: translate(-10px, 0) rotate(-20deg);
        }

        30% {
            transform: translate(10px, 0) rotate(20deg);
        }

        50% {
            transform: translate(-10px, 0) rotate(-10deg);
        }

        60% {
            transform: translate(10px, 0) rotate(10deg);
        }

        100% {
            transform: translate(0, 0) rotate(0);
        }
        `;

    let shakeAnim = {
        animation: `${bounce} 1.25s cubic-bezier(.36,.07,.19,.97) infinite`,
    };

    return (
        <div css={loadingCss}>
            <img css={[imageCss, shakeAnim]} src="/pokeball.png" />
        </div>
    );
};

export default Loading;
