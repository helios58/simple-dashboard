import Card from "./Card";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { getCardData } from "../../Services/Data";

const CardList = ({ startTimestamp, endTimestamp }) => {
    console.log("startTimestamp", startTimestamp);
    console.log("endTimestamp", endTimestamp);

    const pathParts = window.location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];

    const [amount, setAmount] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [influencers, setInfluencers] = useState([]);
    const [activeInfluencers, setActiveInfluencers] = useState([]);
    const [averageAmount, setAverageAmount] = useState([]);

    useEffect(() => {
        // Only call the API if both startTimestamp and endTimestamp are defined
            getCardData(id, startTimestamp, endTimestamp)
                .then((res) => {
                    setAmount(res.totalAmount.toFixed(2));
                    setTransactions(res.transactionCount);
                    setInfluencers(res.influencersCount);
                    setActiveInfluencers(res.activeInfluencersCount);
                    setAverageAmount(res.averageAmount.toFixed(2));
                })
                .catch((err) => console.error('Error fetching card data:', err));
    }, [id, startTimestamp, endTimestamp]); 

    const data = [
        {
            imageSrc: "/Assets/Cards/shopping-bag.png",
            title: amount !== undefined && amount !== null ? amount + " €" : "1M €",
            paragraph: "CA",
            backGround: "#ffeded"
        },
        {
            imageSrc: "/Assets/Cards/credit-card.png",
            title: transactions !== undefined && transactions !== null ? transactions : "31K",
            paragraph: "Transactions",
            backGround: "#e2e5ec"
        },
        {
            imageSrc: "/Assets/Cards/shopping-cart-48.ico",
            title: averageAmount !== undefined && averageAmount !== null ? averageAmount + " €" : "43 €",
            paragraph: "Panier moyen",
            backGround: "#fdf4e5"
        },
        {
            imageSrc: "/Assets/Cards/share-2.png",
            title: activeInfluencers !== undefined && activeInfluencers !== null ? activeInfluencers : "689",
            paragraph: "Actifs influenceurs",
            backGround: "#eaf5ed"
        },
        {
            imageSrc: "/Assets/Cards/navigation.png",
            title: influencers !== undefined && influencers !== null ? influencers : "7001",
            paragraph: "Total influenceurs",
            backGround: "#ffe1e1"
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Taux de vente par influenceur",
            isGraph: true
        },
    ];

    return (
        <div>
            <br />
            <Typography variant="h6" color="primary.dark" className="card-title">
                Performances globales
            </Typography>
            <div className="card-list">
                {data.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CardList;