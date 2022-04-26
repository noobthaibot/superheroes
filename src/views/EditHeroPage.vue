<template>
  <form>
    <ul>
      <li class="input-nickname">
        <label for="name">Enter hero's nickname</label>
        <input type="text" name="name" id="name" />
      </li>
      <li class="input-realname">
        <label for="realname">Enter hero's realname</label>
        <input type="text" name="realname" id="realname" />
      </li>
      <li class="input-description">
        <label for="desc">Enter hero's origin description</label>
        <input type="text" name="desc" id="desc" />
      </li>
      <li class="input-superpower">
        <label for="superpower">Enter hero's superpowers</label>
        <input type="text" name="superpower" id="superpower" />
      </li>
      <li class="input-phrase">
        <label for="phrase">Enter hero's catch phrase</label>
        <input type="text" name="phrase" id="phrase" />
      </li>
      <li class="input-image">
        <label for="hero-image">Upload hero's image</label>
        <input type="file" name="hero-image" id="hero-image" multiple />
      </li>
    </ul>
    <button class="edit-button" type="submit">Update Hero!</button>
  </form>
</template>
