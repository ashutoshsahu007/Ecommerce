import React from "react";
import MainLayout from "../layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="text-center px-4 py-10 bg-white">
        <h1 className="text-4xl font-bold mb-8">ABOUT</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          <img
            src="bandMembers.png"
            alt="Band"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <p className="text-gray-700 text-justify leading-relaxed max-w-2xl">
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings. <br />
            <br />I never said will unfold in him receives at another time he
            may please the one that those works, we are less than they, this
            refused to the pleasures of deleniti? Those are will unfold in times
            of pleasure, this pain will be a right enjoyed by corrupt, are
            accusing him of all pleasures, and seek his own, or, to the needs of
            the agony of the choice. We hate the fellow.
          </p>
        </div>

        <p className="mt-8 text-gray-700 text-justify max-w-4xl mx-auto leading-relaxed">
          The greater, therefore, an obstacle to the duties of the debts
          receives the very great importance to us that these are consequent to
          that question is answered, which was selected for the fault, it is
          often one of us, however, have any! Moreover, this is often not at
          once take the hardships of the life of harsh condemn, we are accusing
          him? Him whom something large cisterns.
        </p>
      </div>
    </MainLayout>
  );
};

export default About;
