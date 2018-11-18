export interface Cv {
    titre: string;
    nom: string;
    prenom: string;
    photo?: string;
    adresse: Address;
    email: string;
    permis: boolean;
    vehicule: boolean;
    age: number;
    telephone: string;
    nationalite?: string;
    experience: Sections;
    formation: Sections;
    hobbie: Sections;
}

export interface Sections {
    s1?: Section;
    s2?: Section;
    s3?: Section;
    s4?: Section;
    s5?: Section;
    s6?: Section;
    s7?: Section;
    s8?: Section;
    s9?: Section;
    s10?: Section;
}

export interface Section {
    titre: string;
    date?: string;
    description?: string;
}


export interface Address {
    street: string;
    postalCode: string;
    city: string;
}
