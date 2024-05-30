import { useState, useEffect } from 'react';
import '../Styles/Pages/ConsulteFinance.css';
import InfoBar from '../Composant/InfoBar';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ConsulteFinance() {
    const [operations, setOperations] = useState([]);
    const navig=useNavigate()
    useEffect(() => {

        const exampleOperations = [
            { id: 1, date: '2023-01-10', amount: 100 },
            { id: 2, date: '2023-01-15', amount: 200 },
            { id: 3, date: '2023-01-20', amount: 150 },
            { id: 4, date: '2023-01-25', amount: 100 },
            { id: 5, date: '2023-01-30', amount: 200 },
        ];
        setOperations(exampleOperations);
    }, []);

    // Calculer le montant total des opérations
    const totalAmount = operations.reduce((total, op) => total + op.amount, 0);

    return (
        <>
            <InfoBar />
            <button className="home-button" id='home-button2'onClick={()=>{navig("../Accueil")}}>Accueil</button>
            <motion.div 
            className="ConsulteFinance"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.2 ,duration:1}}>
                <p id='titre'>Consulter Vos Opérations Financières avec FoodieFusion</p>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map((op, index) => (
                            <tr key={index}>
                                <td>{op.id}</td>
                                <td>{op.date}</td>
                                <td>{op.amount} DT</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="facture">
                <motion.button 
                id='Facture'
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1 ,duration:0.7}}
                >
                telecharger Facture</motion.button>
                <div>
                <p id='Total'>Le montant total retenu pour ce mois est: <strong style={{color:'red'}}>{totalAmount} DT</strong></p>
                <p id='Total'>Frais de l'abonnement mensuel : 50DT</p>
                <p id='Total'>Reste : {totalAmount-50.0}DT</p>
                </div>
                </div>
            </motion.div>
        </>
    );
}
