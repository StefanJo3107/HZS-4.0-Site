import React from "react";
import SectionTitle from "./../Utilities/SectionTitle";
import "./Faq.scss";
import FaqItem from "./FaqItem";

const Faq = (props) => {
    return (
        <div className="faq" ref={props.section}>
            <SectionTitle>faq</SectionTitle>
            <FaqItem
                question="Ko se može prijaviti za Hakaton?"
                answer={
                    "Za takmičenje se mogu prijaviti učenici svih srednjih škola iz Republike Srbije, u timovima od 3 ili 4 člana. Učešće je besplatno i možete se prijaviti preko forme (link ka formi)."
                }
            />
            <FaqItem
                question="Da li tim mogu činiti takmičari iz različitih srednjih škola?"
                answer="Da, tim može biti sačinjen od učenika iz različitih srednjih škola. Dozvoljeno je i da članovi budu sa različitih smerova i različitih razreda."
            />
            <FaqItem
                question="Question 3"
                answer="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            />
            <FaqItem
                question="Da li takmičari dobijaju pomoć u toku takmičenja?"
                answer="Da, svaki tim dobija po jednog stručnog mentora koji će u toku trajanja takmičenja biti uz njih i usmeravati ih davanjem korisnih saveta i sugestija kako bi što bolje odgovorili na zadatu temu."
            />
            <FaqItem
                question="Koje tehnologije se mogu koristiti za izradu rešenja na Hakatonu?"
                answer="Takmičari imaju slobodu da koriste bilo koje tehnologije koje im odgovaraju i koje smatraju najadekvatnijim za realizaciju rešenja. Tokom hakatona dozvoljeno im je i korišćenje mobilnih telefona, interneta i dodatne literature za nalaženje potrebnih informacija koje im mogu pomoći pri radu."
            />
            <FaqItem
                question="Kako izgleda finale?"
                answer="Svaki tim ima 10 minuta za predstavljanje svoje ideje i  finalnog rešenja stručnom žiriju, nakon čega žiri ima 5 minuta za dodatna pitanja koja postavlja timu. Posle završenih prezentacija svih timova, žiri na privatnom sastanku odlučuje pobednika takmičenja."
            />
        </div>
    );
};

export default Faq;
