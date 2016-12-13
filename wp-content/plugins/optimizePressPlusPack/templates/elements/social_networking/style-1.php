<?php include('style.inc.php'); ?>

<ul id="<?php echo $data['id'] ?>" class="social-networking social-networking-style-1">
    <?php

    $newTab = '_self';
    if($data['new_tab'] === 'Y') {
        $newTab = '_blank';
    }

    foreach ($data as $key => $value) {
        if (strpos($key, 'url') && $value != '') {
            $temp = explode("_", $key);
            echo '<li class="' . $key . '">
                    <a href="' . $value . '" target="' . $newTab . '">
                        <div class=box>
                            <div class="logo"></div>
                            <p>' . $temp[0] . '</p>
                        </div>
                    </a>
                </li>';
        }
    }
    ?>
</ul>
