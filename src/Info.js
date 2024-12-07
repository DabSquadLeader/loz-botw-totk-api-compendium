export default function Info({ name, data }) {
  const entry = data?.data;
  const imageUrl = `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${name.toLowerCase()}/image`;

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return !entry || !name ? (
    <p></p>
  ) : !entry.image || !entry.description ? (
    <p id="notFound">
      Nothing was found for {capitalizeWords(name)}, try again
    </p>
  ) : (
    <div>
      <h2>{capitalizeWords(name)}</h2>
      <img
        src={imageUrl}
        id="entryImage"
        alt={`${capitalizeWords(name)} Image Not Found`}
      />
      <p>{entry.description}</p>
      <h3>Possible Locations</h3>
      <ul>
        {entry.common_locations && entry.common_locations.length > 0 ? (
          entry.common_locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))
        ) : (
          <li>No known locations available for this entry.</li>
        )}
      </ul>
      <h3>
        {entry.category === "creatures"
          ? "Possible Drops and Hearts (if any)"
          : entry.category === "materials"
          ? "Cooking Effect"
          : entry.category === "treasure"
          ? "Possible Drops"
          : entry.category === "monsters"
          ? "Possible Drops"
          : "Properties"}
      </h3>
      <ul>
        {entry.category === "creatures" ? (
          <>
            {entry.drops && entry.drops.length > 0 ? (
              entry.drops.map((drop, index) => (
                <li key={index}>{capitalizeWords(drop)}</li>
              ))
            ) : (
              <li>No drops available for this entry.</li>
            )}
            {entry.hearts_recovered !== undefined && (
              <li>Hearts: {entry.hearts_recovered}</li>
            )}
          </>
        ) : entry.category === "materials" ? (
          <>
            {entry.cooking_effect && (
              <li>Effect: {capitalizeWords(entry.cooking_effect)}</li>
            )}
            {entry.hearts_recovered !== undefined && (
              <li>Hearts: {entry.hearts_recovered}</li>
            )}
            {entry.fuse_attack_power !== undefined && (
              <li>Fuse Attack Power: {entry.fuse_attack_power}</li>
            )}
          </>
        ) : entry.category === "treasure" ? (
          <>
            {entry.drops && entry.drops.length > 0 ? (
              entry.drops.map((drop, index) => (
                <li key={index}>{capitalizeWords(drop)}</li>
              ))
            ) : (
              <li>No drops available for this entry.</li>
            )}
          </>
        ) : entry.category === "monsters" ? (
          <>
            {entry.drops && entry.drops.length > 0 ? (
              entry.drops.map((drop, index) => (
                <li key={index}>{capitalizeWords(drop)}</li>
              ))
            ) : (
              <li>No drops available for this entry.</li>
            )}
          </>
        ) : entry.properties ? (
          <>
            {entry.properties.attack !== undefined && (
              <li>Attack: {entry.properties.attack}</li>
            )}
            {entry.properties.defense !== undefined && (
              <li>Defense: {entry.properties.defense}</li>
            )}
            {entry.properties.effect && (
              <li>Effect: {capitalizeWords(entry.properties.effect)}</li>
            )}
            {entry.properties.type && (
              <li>Type: {capitalizeWords(entry.properties.type)}</li>
            )}
          </>
        ) : (
          <li>No properties available for this entry.</li>
        )}
      </ul>
    </div>
  );
}
