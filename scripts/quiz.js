/**
 * @typedef {"full-sun" | "partial-sun" | "shade"} Sunlight
 * @typedef {"easy" | "moderate" | "hard"} CareLevel
 * @typedef {"yes" | "no"} PetFriendly
 */

/**
 * @typedef {Object} Plant
 * @property {string} name
 * @property {Sunlight} sunlight
 * @property {CareLevel} careLevel
 * @property {PetFriendly} petFriendly
 */

/** @type {Plant[]} */
const plants = [
    {
        name: 'Spider Plant',
        sunlight: 'full-sun',
        careLevel: 'easy',
        petFriendly: 'yes',
    },
    {
        name: 'Aloe Vera',
        sunlight: 'full-sun',
        careLevel: 'easy',
        petFriendly: 'no',
    },
    {
        name: 'Pothos',
        sunlight: 'full-sun',
        careLevel: 'easy',
        petFriendly: 'no',
    },
    {
        name: 'Cactus',
        sunlight: 'full-sun',
        careLevel: 'moderate',
        petFriendly: 'no',
    },
    {
        name: 'Succulent',
        sunlight: 'full-sun',
        careLevel: 'easy',
        petFriendly: 'no',
    },

    {
        name: 'Ficus Tree',
        sunlight: 'partial-sun',
        careLevel: 'moderate',
        petFriendly: 'no',
    },
    {
        name: 'Boston Fern',
        sunlight: 'partial-sun',
        careLevel: 'moderate',
        petFriendly: 'yes',
    },
    {
        name: 'ZZ Plant',
        sunlight: 'partial-sun',
        careLevel: 'moderate',
        petFriendly: 'no',
    },
    {
        name: 'Maranta',
        sunlight: 'partial-sun',
        careLevel: 'easy',
        petFriendly: 'yes',
    },

    {
        name: 'ZZ Plant',
        sunlight: 'shade',
        careLevel: 'hard',
        petFriendly: 'no',
    },
    {
        name: 'Calathea',
        sunlight: 'shade',
        careLevel: 'moderate',
        petFriendly: 'yes',
    },
    {
        name: 'Snake Plant',
        sunlight: 'shade',
        careLevel: 'easy',
        petFriendly: 'no',
    },
    {
        name: 'Maranta',
        sunlight: 'shade',
        careLevel: 'easy',
        petFriendly: 'yes',
    },
    {
        name: 'Peace Lily',
        sunlight: 'shade',
        careLevel: 'moderate',
        petFriendly: 'yes',
    }
];

function getPlantRecommendation() {
    /** @type {Sunlight} */
    const sunlight = document.getElementById("sunlight").value;
    /** @type {CareLevel} */
    const careLevel = document.getElementById("care-level").value;
    /** @type {PetFriendly} */
    const petFriendly = document.getElementById("pet-friendly").value;

    const recommendedPlant = plants.find(plant =>
        plant.sunlight === sunlight &&
        plant.careLevel === careLevel &&
        plant.petFriendly === petFriendly
    );

    let recommendation = '';

    if (recommendedPlant) {
        recommendation = `We recommend a '${recommendedPlant.name}'!`;
    } else {
        recommendation = "No exact match found. Try exploring our plant collections!";
    }

    document.getElementById("recommendation").innerHTML = `<h4>${recommendation}</h4>`;
}
