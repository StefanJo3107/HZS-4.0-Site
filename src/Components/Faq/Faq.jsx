import React from "react";
import SectionTitle from "./../Utilities/SectionTitle";
import "./Faq.scss";
import FaqItem from "./FaqItem";
import { Link } from "react-router-dom";
import LayeredWaves from "../../Assets/Images/layered-waves3.svg";

const Faq = (props) => {
    return (
        <div className="faq-wrapper">
            <div className="faq" ref={props.section}>
                <SectionTitle>faq</SectionTitle>
                <FaqItem
                    question="Ko se može prijaviti za Hakaton?"
                    answer={
                        <p style={{ marginBottom: "1rem" }}>
                            Za takmičenje se mogu prijaviti učenici svih
                            srednjih škola iz Republike Srbije, u timovima od 3
                            ili 4 člana. Učešće je besplatno i možete se
                            prijaviti preko{" "}
                            <Link to="/prijava" style={{ color: "#00ffa3" }}>
                                forme
                            </Link>
                            .
                        </p>
                    }
                />
                <FaqItem
                    question="Da li tim mogu činiti takmičari iz različitih srednjih škola?"
                    answer={
                        <p style={{ marginBottom: "1rem" }}>
                            Da, tim može biti sačinjen od učenika iz različitih
                            srednjih škola. Dozvoljeno je i da članovi budu sa
                            različitih smerova i različitih razreda.
                        </p>
                    }
                />
                <FaqItem
                    question="Na osnovu čega se vrši selekcija timova?"
                    answer={
                        <p style={{ marginBottom: "1rem" }}>
                            Na osnovu prijava sa sajta vrši se odabir timova
                            koji će raditi online test. Cilj online testa jeste
                            da se ispita informatičko znanje učesnika. Timovi
                            koji ostvare najbolji rezultat u prva dva kruga
                            selekcije prisustvovaće radionicama. Po završetku
                            radionica učesnicima se zadaje domaći zadatak, koji
                            ujedno predstavlja i treći krug selekcije. Na sam
                            hakaton plasiraće se 8 do 10 timova koji se najbolje
                            pokažu u sva tri kruga selekcije.
                        </p>
                    }
                />
                <FaqItem
                    question="Da li takmičari dobijaju pomoć u toku takmičenja?"
                    answer={
                        <p style={{ marginBottom: "1rem" }}>
                            Da, svaki tim dobija po jednog stručnog mentora koji
                            će u toku trajanja takmičenja biti uz njih i
                            usmeravati ih davanjem korisnih saveta i sugestija
                            kako bi što bolje odgovorili na zadatu temu.
                        </p>
                    }
                />
                <FaqItem
                    question="Koje tehnologije se mogu koristiti za izradu rešenja na Hakatonu?"
                    answer={
                        <p style={{ marginBottom: "1rem" }}>
                            Takmičari imaju slobodu da koriste bilo koje
                            tehnologije koje im odgovaraju i koje smatraju
                            najadekvatnijim za realizaciju rešenja. Tokom
                            hakatona dozvoljeno im je i korišćenje mobilnih
                            telefona, interneta i dodatne literature za
                            nalaženje potrebnih informacija koje im mogu pomoći
                            pri radu.
                        </p>
                    }
                />
                <FaqItem
                    question="Kako izgleda finale?"
                    answer={
                        <p style={{ marginBottom: "1rem" }}>
                            Svaki tim ima 10 minuta za predstavljanje svoje
                            ideje i finalnog rešenja stručnom žiriju, nakon čega
                            žiri ima 5 minuta za dodatna pitanja koja postavlja
                            timu. Posle završenih prezentacija svih timova, žiri
                            na privatnom sastanku odlučuje pobednika takmičenja.
                        </p>
                    }
                />
            </div>
            <img
                src={LayeredWaves}
                className="section-transition"
                alt="Tranzicija na iskustva"
            />
        </div>
    );
};

export default Faq;
