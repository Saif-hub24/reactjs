import usePlateforms from "./usePlateforms";

const usePlatform = (id?: number) => {
    const { data: platforms } = usePlateforms();
    return platforms?.results.find(
      (p) => p.id === id
    );
    
}
export default usePlatform; 

