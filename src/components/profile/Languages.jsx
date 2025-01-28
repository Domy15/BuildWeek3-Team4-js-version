/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Languages = () => {
    const array = ["Italiano", "Inglese", "Spagnolo", "Francese", "Tedesco", "Cinese", "Giapponese", "Arabo", "Russo"];
    const level = [
        "Conoscenza madrelingua o bilingue",
        "Conoscenza professionale completa",
        "Conoscenza professionale limitata",
        "Conoscenza elementare",
        "Conoscenza di base"
    ];

    const [show, setShow] = useState(2);
    const [lang, setLang] = useState([]);

    const getRandom = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const getLang = () => {
        const n = getRandom(1, 5);
        const usedLanguages = new Set();
        for (let i = 0; i < n; i++) {
            let randomLanguage;
            do {
                randomLanguage = array[getRandom(0, array.length - 1)];
            } while (usedLanguages.has(randomLanguage));
            usedLanguages.add(randomLanguage);
            const randomLevel = level[getRandom(0, level.length - 1)];
            setLang((item) => [
                ...item,
                { lang: randomLanguage, level: randomLevel }
            ]);
        }
    };

    const showMore = () => {
        setShow(lang.length);
    };

    useEffect(() => {
        getLang()
    }, []);

    return (
        <>
            <Container className="border rounded-2 p-0 pt-3">
                {lang && (
                    <>
                        <Row className="px-3">
                            <Col className="">
                                <h4>Lingue</h4>
                                {lang.slice(0, show).map((item, i) => {
                                    return (
                                        <Row className=" px-2 " key={i}>
                                            <Col className="pb-3 custom-border-bottom">
                                                <p className="p-0 m-0 fw-bold ">{item.lang}</p>
                                                <p className="p-0 m-0 opacity-50"> {item.level}</p>

                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Col>
                        </Row>
                        {show < lang.length && (
                            <Button
                                variant="light"
                                size="sm"
                                className=" show-more-btn"
                                onClick={showMore}
                            >
                                Mostra tutte le competenze
                            </Button>
                        )}
                    </>
                )}
            </Container>
        </>
    );
};

export default Languages