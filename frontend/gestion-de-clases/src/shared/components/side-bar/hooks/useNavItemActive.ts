import { useState } from "react";

const useNavItemActive = () => {

    const [id, setId] = useState<number | null>(null);

    const onVisible = (navId: number) => setId(navId === id ? refresh() : navId);

    const refresh = () => null

    const isVisible = (navId: number) => navId === id;

    return {isVisible, onVisible}
}

export default useNavItemActive;