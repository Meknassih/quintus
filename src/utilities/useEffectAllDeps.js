const { useState, useEffect } = require("react");

function useEffectAllDeps(fn, deps) {
  const [changeTarget, setChangeTarget] = useState(deps);

  useEffect(() => {
    setChangeTarget(prev => {
      if (prev.every((dep, i) => dep !== deps[i])) {
        return deps;
      }

      return prev;
    });
  }, [deps]);

  useEffect(fn, changeTarget);
}

export default useEffectAllDeps;