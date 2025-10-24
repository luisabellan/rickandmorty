interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin?: {
        name: string;
        type: string;
        dimension: string;
    } | null;
    location?: {
        name: string;
        type: string;
        dimension: string;
    } | null;
    image: string;
    episode: {
        id: number;
        name: string;
        air_date: string;
        episode: string;
    }[];
    created: string;
}
interface CharacterCardProps {
    character: Character;
}
export declare function CharacterCard({ character }: CharacterCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map