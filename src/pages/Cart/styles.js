import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 5px;

    header {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding-left: 16%;
        font-size: 18px;
        font-weight: bold;
        color: #a8a6a9;
    }

    footer {
        display: flex;
        margin-top: 30px;
        justify-content: space-between;
        align-items: center;
        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: all 0.2s ease-in-out;
            padding: 10px 15px;

            &:hover {
                box-shadow: 0px 4px 15px 10px rgba(0, 0, 0, 0.1);
                transform: translateY(-2px);
                background: #32a852;
            }
        }
    }
`;

export const ProductCart = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;

    img {
        width: 15%;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    .description-group {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid grey;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 80px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const Total = styled.div`
    font-size: 16px;
    span {
        margin-right: 5px;
        font-weight: 500;
    }
`;
