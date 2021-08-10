export const redirect = (Component) => {
	if(isFetching){
			return <Preloader/>;
		}  else {
			return Component;
		}
}