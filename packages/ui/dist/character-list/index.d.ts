export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        type: string;
        dimension: string;
    };
    location: {
        name: string;
        type: string;
        dimension: string;
    };
    image: string;
    episode: {
        id: number;
        name: string;
        air_date: string;
        episode: string;
    }[];
    created: string;
}
export interface CharactersData {
    characters: {
        info: {
            count: number;
            pages: number;
            next: number | null;
            prev: number | null;
        };
        results: Character[];
    };
}
interface CharacterListProps {
    data: CharactersData;
    searchParams: {
        page?: string;
        search?: string;
        status?: string;
        species?: string;
        gender?: string;
        location?: string;
    };
}
export declare function CharacterList({ data, searchParams }: CharacterListProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map