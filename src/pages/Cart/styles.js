import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 5px;

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

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    thead td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 100px;
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

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid grey;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const Total = styled.div``;
